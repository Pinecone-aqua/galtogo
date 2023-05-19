# GALTOGO

RESTAURANT RESERVATION WEB APP

# Pinecone Academy

Team "Galtogoo" 2023

# Developers:

M.Munkhtulga /developer, team lead/ { tugarik@gmail.com }
Nomin /developer/ { nominest3@gmail.com }
Munkhbat /developer, designer/ { muugiiyep0722@gmail.com }

# Brief

GALTOGO WebApp is a system for online booking reservations in a restaurant. GALTOGO provides restaurants with modern capabilities to attract customers, optimize guest capacity, control kitchen staff’s workload, gives customers the freedom to make a booking whenever they like without having to call, allows customers to view available tables, allows customers to calculate their bill “Pay per each Person” or “Pay equally”, and more.

# MVP

- Customer side:

  - Choose desired date and time
  - View available tables
  - Reservation CRUD

- Business side:

  - View Reservations list
  - Show Tables on Timetable
  - Modify working hours, holidays.
  - Reservation CRUD
  - Tables CRUD
  - Users CRUD

# ERD

| Reservation
|-----------------------------------|
| id (ObjectId)
| date (String)
| hour (String)
| table_id (ObjectID ref: “Table”)
| user_id (ObjectID ref: “User”)
| isCompleted (Boolean)

| Table
|-----------------------------------|
| id (ObjectId)
| name / tableNumber (string)
| capacity (Number)
| isActive (boolean)
| isCompleted (Boolean)

| Users
|-----------------------------------|
| id (ObjectId)
| firstName (String)
| lastName (String)
| email (String)
| phone (String)

| Category
|-----------------------------------|
| id (ObjectId)
| name (String)

| Product
|-----------------------------------|
| id (ObjectId)
| name (String)
| price (Number)
| description (String)
| category (ObjectId, ref=”Category”)

---

=========== All rights reserved :) ============
