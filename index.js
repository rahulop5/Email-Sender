import express from "express";
import env from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";

const app=express();

app.get("/", (req, res)=>{
    res.send("Hello");
});


app.listen(3000);