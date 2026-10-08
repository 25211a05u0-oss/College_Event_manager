# CampusPulse — College Event Management System

A modern responsive college event management website with HTML, CSS and JavaScript, plus an optional Express backend and MySQL database schema.

## 1. Fastest way to view the website
Open `frontend/index.html` directly in Chrome/Edge.

No installation is required for the frontend demo.

## 2. Run with the backend
Requirements: Node.js 18+

Open a terminal in `backend/`:
```bash
npm install
npm start
```
Then open:
http://localhost:3000

## 3. Database
Requirements: MySQL 8+

Run `database/schema.sql` in MySQL Workbench or the MySQL CLI. The schema contains:
- users
- events
- registrations
- announcements
- feedback

## Project structure
- frontend/index.html — main UI
- frontend/style.css — responsive design and animations
- frontend/app.js — event filtering, login demo and registration UI
- backend/server.js — Express API starter
- backend/package.json — backend dependencies
- database/schema.sql — relational database design

## Main modules
Student:
- Browse/filter events
- Event details
- Register for an event
- Student dashboard

Organizer/Admin foundation:
- Event data model
- Event status
- Capacity
- Registration records
- Announcements
- Feedback

## Next production steps
Connect the Express routes to MySQL, add password hashing/JWT sessions, admin CRUD screens, email notifications and deployment.
