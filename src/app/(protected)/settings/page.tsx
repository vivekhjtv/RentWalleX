import React from "react";
import { auth, signOut } from "../../../../auth";
// import '../../../../style.css'

const Settings = async () => {
  const session = await auth();

  return (
    <>
      <div className="container">
        {/* <nav>
          <div className="navbar">
            <div className="logo">
              <img src="/pic/logo.jpg" alt="">
              <h1>User</h1>
            </div>
            <ul>
              <li><a href="#">
                <i className="fas fa-user"></i>
                <span className="nav-item">Dashboard</span>
              </a>
              </li>
              <li><a href="#">
                <i className="fas fa-chart-bar"></i>
                <span className="nav-item">Rental Home</span>
              </a>
              </li>
              <li><a href="#">
                <i className="fas fa-tasks"></i>
                <span className="nav-item">Membership account</span>
              </a>
              </li>
              <li><a href="#">
                <i className="fab fa-dochub"></i>
                <span className="nav-item">My Application</span>
              </a>
              </li>
              <li><a href="#">
                <i className="fas fa-comments-dollar"></i>
                <span className="nav-item">Payment Setup</span>
              </a>
              <div className="dropdown-content">
                <a href="#automated-payment"><i className="fas fa-clock"></i> Automated Payment</a>
                <a href="#bank-details"><i className="fas fa-university"></i> Bank Details</a>
                <a href="#debit-credit-card-setup"><i className="far fa-credit-card"></i> Debit/Credit Card Setup</a>
                <a href="#payment-history"><i className="fas fa-history"></i> Payment History</a>
            </div>
              </li>
             
              <li><a href="#">
                <i className="fas fa-question-circle"></i>
                <span className="nav-item">Credit History</span>
              </a>
              </li>
              <li><a href="#">
                <i className="fas fa-dollar-sign"></i>
                <span className="nav-item">Refer & Earn</span>
              </a>
              </li>
              <li><a href="#" >
                <i className="fas fa-cog"></i>
                <span className="nav-item">Settings</span>
                <ul>
                    <li><a href="#change-email">Change Email</a></li>
                    <li><a href="#change-password">Change Password</a></li>
                    <li><a href="#notification-settings">Notification Settings</a></li>
                </ul>
                <i className="fas fa-caret-down"></i>
              </a>
              </li>
              <li><a href="#" className="logout">
                <form action={async()=>{
        "use server";

        await signOut();
    }}>
        <button className="nav-item" type='submit'>Sign out</button>
    </form>
              </a>
              </li>
            </ul>
          </div>
        </nav> */}

        {/* <section className="main">
          <div className="main-top">
            <p>Explore the new Renting</p>
          </div>
          <div className="main-body">
            <h1>Recent Properties for Rental</h1>
          
          <div className="search_bar">
            <input type="search" placeholder="Search property here...">

            <select className="filter">
              <option>Filter</option>
            </select>
          </div>
    
          <div className="tags_bar">
            <div className="tag">
              <i className="fas fa-times"></i>
              <span>Location</span>
            </div>
            <div className="tag">
              <i className="fas fa-times"></i>
              <span>city</span>
            </div>
            <div className="tag">
              <i className="fas fa-times"></i>
              <span>Pincode</span>
            </div>
          </div>
    
          <div className="row">
            <p>There are more than <span>400</span> Rentals</p>
            <a href="#">See all</a>
          </div>
    
          <div className="rent_card">
            <div className="rent_details">
              <div className="img">
                <i className="fas fa-building"></i>
              </div>
              <div className="text">
                <h2>25 Mabel Anevue</h2>
                <span>2 Bed 2 Bath</span>
              </div>
            </div>
            <div className="rent_price">
              <h4>$2500</h4>
              <span>1 days ago</span>
            </div>
          </div>

          <div className="rent_card">
            <div className="rent_details">
              <div className="img">
                <i className="fas fa-building"></i>
              </div>
              <div className="text">
                <h2>25 Mabel Anevue</h2>
                <span>2 Bed 1 Bath</span>
              </div>
            </div>
            <div className="rent_price">
              <h4>$2100</h4>
              <span>2 days ago</span>
            </div>
          </div>
          
          
        </div>
        </section> */}
        <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
        <h5 className="font-semibold mt-10 text-gray-900">Change Password</h5>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter current Password
            </label>
            <div className="mb-3">
              <input
                type="text"
                id="firstname"
                // {...register('firstName')}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              {/* {errors.firstName?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.firstName.message}
                </p>
              )} */}
            </div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter new Password
            </label>
            <div className="mb-3">
              <input
                type="text"
                id="firstname"
                // {...register('firstName')}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              {/* {errors.firstName?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.firstName.message}
                </p>
              )} */}
            </div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Re-Enter new Password
            </label>
            <div className="mb-3">
              <input
                type="text"
                id="firstname"
                // {...register('firstName')}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              {/* {errors.firstName?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.firstName.message}
                </p>
              )} */}
            </div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 my-1 border border-gray-400 rounded shadow">
              Change
            </button>
          </div>
        </div>

        <h5 className="font-semibold mt-10 text-gray-900">
          Notification Settings
        </h5>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <div className="flex mb-3">
              <label
                htmlFor="emailNotifications"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Notifications
              </label>
              <input
                type="checkbox"
                id="emailNotifications"
                className="rounded border-gray-300 text-sky-600 shadow-sm focus:ring-sky-600"
              />
            </div>

            <div className="flex mb-3">
              <label
                htmlFor="smsNotifications"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                SMS Notifications
              </label>
              <input
                type="checkbox"
                id="smsNotifications"
                className="rounded border-gray-300 text-sky-600 shadow-sm focus:ring-sky-600"
              />
            </div>

            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 my-1 border border-gray-400 rounded shadow">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
