#!/usr/bin/env node
const mergePackageJson = require("merge-package.json");
import fs from "fs";

const localFilename = process.argv[2] || "";
const baseFilename = process.argv[3] || "";
const theirsFilename = process.argv[4] || "";

const localJson = fs.readFileSync(localFilename, "utf-8");
const baseJson = fs.readFileSync(baseFilename, "utf-8");
const theirsJson = fs.readFileSync(theirsFilename, "utf-8");

const mergedJson = mergePackageJson(localJson, baseJson, theirsJson);
fs.writeFileSync(localFilename, mergedJson, "utf-8");
