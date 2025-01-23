import React, { useState } from "react";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="hidden xl:block px-[10%] mt-4 pb-6">
      <h2 className="text-center font-semibold text-3xl py-4 text-blue-800">
        More
      </h2>
      <div className="grid md:grid-cols-4 py-4 gap-4">
        <ul className="flex flex-col gap-4">
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(0)}
            >
              IRCTC Trains
              <img
                src={openDropdown === 0 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 0 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Salient Features
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Ticket Cancellation Rules
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Foreign Tourist T&C
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Group Booking T&C
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Travel Insurance Claim Process
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(1)}
            >
              General Information
              <img
                src={openDropdown === 1 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 1 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    More Info
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    FAQs
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Terms & Conditions
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Travel Insurance T&C
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    FTR T&C
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Scheme for Issue of Waitlisted E-tickets
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Protect Against Fraudulent Emails
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    General Guideline for SUVIDHA Trains
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Current Booking Guidelines
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Forgo Senior Citizen Concession-FAQ
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Trains at a Glance
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Guidelines for Boarding Station Change
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Guideline for PASS Booking
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(2)}
            >
              Important Information
              <img
                src={openDropdown === 2 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 2 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Bank Transaction Charges
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Women Sr. Citizen Concession
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    VIKALP Scheme
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Travel Insurance (Incl. of GST)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Browser Settings
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(3)}
            >
              Agents{" "}
              <img
                src={openDropdown === 3 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 3 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Agents Login
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Authorized Service Providers
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Digital Certificate Generation Process
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Blacklist Agent
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Find NgeT Agents
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Rules and Regulations for the Agents
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for RTSA
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for IATA
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for GSA
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for Internet Cafe Scheme
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for B2B Scheme
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Norms for B2C & Mobile Scheme
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Registration Form
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Requisition Slip
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(4)}
            >
              Enquiries{" "}
              <img
                src={openDropdown === 4 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 4 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Reservation Enquiries
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    PNR Enquiry
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Train Enquiry
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Train/Fare Accommodation
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Train Between Important Stations
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Railway Enquiry-139
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(5)}
            >
              How To{" "}
              <img
                src={openDropdown === 5 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 5 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Register
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Book E-ticket (PDF) (VIDEO)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Book Tatkal Ticket
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Book Concession Tickets for Person With Disability
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Cancel E-ticket
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    International/NRI User Registration Guide
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Change Boarding Point
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Link Your Aadhaar
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    File TDR
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(6)}
            >
              IRCTC App{" "}
              <img
                src={openDropdown === 6 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 6 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Rail Connect (Android)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Rail Connect (iOS)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Order Food (Android)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Order Food (iOS)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Tourism App
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Air App (Android)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Air App (iOS)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC iMudra (Android)
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(7)}
            >
              Advertise with us{" "}
              <img
                src={openDropdown === 7 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 7 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Marketing Statistics
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Banner-Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Advertisement Terms & Conditions
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Banner Locations on IRCTC
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Push Notification
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Chat Bot Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Chat Bot : As a IRCTC Service
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Cuboid Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    e-Ticket(ERS) Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Logout Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    139-Jingles
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    SMS(Promotional)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Booking Mail Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Cancellation Mail Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Mailer(Promotional)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Captcha Advertisement
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Advertisement Disclaimer
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(8)}
            >
              Refund Polices{" "}
              <img
                src={openDropdown === 8 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 8 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Ticket Cancellation & Refund Rules
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Gazette: Cancellation of Ticket and Refund Rules 2015
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Refund Rule of Suvidha Train
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(9)}
            >
              Person with Disabilities
              <img
                src={openDropdown === 9 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 9 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Facilities for Person With Disability Users
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Facilities for Visually Impaired Users
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    User Guide: Person With Disability Booking
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(10)}
            >
              IRCTC eWallet{" "}
              <img
                src={openDropdown === 10 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 10 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    About
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(11)}
            >
              Avail Loyalty Benefits
              <img
                src={openDropdown === 11 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 11 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC SBI Loyalty Program
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC BOB Loyalty Program
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC HDFC Loyalty Program
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC RBL Loyalty Program
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(12)}
            >
              IRCTC iPay - Payment Gateway
              <img
                src={openDropdown === 12 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 12 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC-iPAY (PDF) (VIDEO)
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    AutoPay
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(13)}
            >
              IRCTC Zone{" "}
              <img
                src={openDropdown === 13 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 13 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Jago Yatri Jago
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Jansankhya Sthirata Kosh
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Maharaja's Express
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(14)}
            >
              DMRC Ticket Booking
              <img
                src={openDropdown === 14 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 14 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    User Guide
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(15)}
            >
              For Newly Migrated Agents
              <img
                src={openDropdown === 15 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 15 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Login Manual - from old site to new site
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Operating Manual for new e-ticketing website
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Operating Manual for Agent Interface Application
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(16)}
            >
              Mobile Zone
              <img
                src={openDropdown === 16 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 16 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    IRCTC Android App - IRCTC Rail Connect
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    ClearTrip
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Airtel
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Amazon India - Shop & Pay
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Confirmtkt
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    EaseMyTrip Flight, Hotel, Train
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Google Pay
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Goibibo
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    MakeMyTrip
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Ixigo Trains
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Ixigo Flights
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    PayTM
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    JustDial
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    redRail
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    redBus
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Railofy
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Railyatri
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Trainman
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    SBI YONO
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Yatra
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    udChalo
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Kotak
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    ICICI
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    HDFC PayZapp
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Tripozo
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(17)}
            >
              Policies
              <img
                src={openDropdown === 17 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 17 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Agents & Principal Service Providers Policies for Reserved
                    e-Ticketing
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Payment Integration Policies for Reserved e-Ticketing
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Payment Integration Policies for Unreserved Ticketing
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Policy for Tourism Handicraft Websites Promotion
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Marketing Policies
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(18)}
            >
              Ask Disha Chatbot
              <img
                src={openDropdown === 18 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 18 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Services of Ask Disha ChatBot
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Features of Ask Disha ChatBot
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="flex items-center cursor-pointer hover:underline underline-offset-4"
              onClick={() => toggleDropdown(19)}
            >
              About us
              <img
                src={openDropdown === 19 ? up : down}
                alt=""
                height={20}
                width={20}
              />
            </button>
            {openDropdown === 19 && (
              <div className="pl-5 font-normal text-black/60 italic">
                <ul className="list-disc">
                  <li className="cursor-pointer hover:underline underline-offset-2">
                    Awards & Achievements
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
