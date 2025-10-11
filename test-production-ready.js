#!/usr/bin/env node
/**
 * Production Readiness Test Suite
 * Run this script to validate the application for production deployment
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const tests = [];
let passed = 0;
let failed = 0;

function test(name, fn) {
    tests.push({ name, fn });
}

function run() {
    console.log("🚀 Running Production Readiness Tests\n");

    tests.forEach(({ name, fn }) => {
        try {
            fn();
            console.log(`✅ ${name}`);
            passed++;
        } catch (error) {
            console.log(`❌ ${name}: ${error.message}`);
            failed++;
        }
    });

    console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

    if (failed > 0) {
        console.log(
            "\n⚠️  Some tests failed. Please fix issues before production deployment."
        );
        process.exit(1);
    } else {
        console.log("\n🎉 All tests passed! Application is production ready.");
    }
}

// Test cases
test("Environment variables are properly configured", () => {
    const envExampleExists = fs.existsSync(".env.example");
    if (!envExampleExists) {
        throw new Error(
            ".env.example file not found - create one for deployment reference"
        );
    }

    // Check if VITE_API_URL is documented
    const envExample = fs.readFileSync(".env.example", "utf8");
    if (!envExample.includes("VITE_API_URL")) {
        throw new Error("VITE_API_URL should be documented in .env.example");
    }
});

test("No console.log statements in production code", () => {
    const srcFiles = execSync(
        'find src -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx"',
        { encoding: "utf8" }
    )
        .split("\n")
        .filter(Boolean);

    for (const file of srcFiles) {
        const content = fs.readFileSync(file, "utf8");
        const lines = content.split("\n");

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (
                line.includes("console.log") &&
                !line.includes("import.meta.env.DEV") &&
                !line.includes("eslint-disable")
            ) {
                throw new Error(
                    `Unguarded console.log found in ${file}:${i + 1}`
                );
            }
        }
    }
});

test("Package.json has proper build scripts", () => {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

    if (!pkg.scripts?.build) {
        throw new Error("Missing build script in package.json");
    }

    if (!pkg.scripts?.preview) {
        throw new Error("Missing preview script for testing production build");
    }
});

test("Build succeeds without errors", () => {
    try {
        execSync("npm run build", { stdio: "pipe" });
    } catch (error) {
        throw new Error("Build failed: " + error.message);
    }
});

test("Distribution files are created", () => {
    if (!fs.existsSync("dist")) {
        throw new Error("dist directory not created after build");
    }

    if (!fs.existsSync("dist/index.html")) {
        throw new Error("dist/index.html not found");
    }

    const distFiles = fs.readdirSync("dist/assets");
    const hasJS = distFiles.some((f) => f.endsWith(".js"));
    const hasCSS = distFiles.some((f) => f.endsWith(".css"));

    if (!hasJS) throw new Error("No JavaScript bundles found in dist/assets");
    if (!hasCSS) throw new Error("No CSS bundles found in dist/assets");
});

test("API service has proper error handling", () => {
    const apiFile = fs.readFileSync("src/services/api.js", "utf8");

    if (!apiFile.includes("withRetry")) {
        throw new Error("API service missing retry mechanism");
    }

    if (!apiFile.includes("isNetworkError")) {
        throw new Error("API service missing network error detection");
    }

    if (!apiFile.includes("import.meta.env.DEV")) {
        throw new Error("API service missing dev-only logging guards");
    }
});

test("No sensitive data in source code", () => {
    const srcFiles = execSync(
        'find src -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx"',
        { encoding: "utf8" }
    )
        .split("\n")
        .filter(Boolean);

    const sensitivePatterns = [
        /password\s*[:=]\s*['"][^'"]{3,}['"]/i,
        /api_key\s*[:=]\s*['"][^'"]{10,}['"]/i,
        /secret\s*[:=]\s*['"][^'"]{10,}['"]/i,
        /token\s*[:=]\s*['"][^'"]{20,}['"]/i,
    ];

    for (const file of srcFiles) {
        const content = fs.readFileSync(file, "utf8");
        for (const pattern of sensitivePatterns) {
            if (pattern.test(content)) {
                throw new Error(`Potential sensitive data found in ${file}`);
            }
        }
    }
});

// Run all tests
run();
