import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <div>
         <section class="course">
        <h1>Admin Dashboard</h1>
        <p>Access a comprehensive overview of all user data at a glance on this dedicated admin page.</p>
    
        <div class="row">
            <div class="course-col">
                <h3>All Users</h3>
                <p>Registered users and their details</p>
                <a class="hero-btn" href="/admin/allusers">View</a>
            </div>

           
            <div class="course-col">
                <h3>Sports Registration</h3>
                <p>Sports registrations and their details.</p>
                <a class="hero-btn" href="/admin/showtable">View</a>
            </div>

            <div class="course-col">
                <h3>Document Verification</h3>
                <p>Document verifications and their details</p>
                <a class="hero-btn" href="/">View</a>
            </div>
            <div class="course-col">
                <h3>All Games</h3>
                <p>All Games of categories of Boy, Girl & Mixed</p>
                <a class="hero-btn" href="/admin/allgames">View</a>
            </div>

        </div>
       

    </section >
    </div>
  )
}

export default Admin
