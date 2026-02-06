"use client";

import React from "react";
import { useUser } from "@/components/pages/dashboard/users/user-context";

const Page = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <div className="user-profile">
      <div className="user-profile__section">
        <h4 className="user-profile__title">
          Personal Information
        </h4>
        <div className="user-profile__grid">
          <div className="user-profile__item">
            <p className="user-profile__label">full Name</p>
            <p className="user-profile__value">
              {user.full_name}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Phone Number</p>
            <p className="user-profile__value">
              {user.phone_number}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Email Address</p>
            <p className="user-profile__value">
              {user.email}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Bvn</p>
            <p className="user-profile__value">
              {user.bvn}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Gender</p>
            <p className="user-profile__value">
              {user.gender}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Marital status</p>
            <p className="user-profile__value">
              {user.marital_status}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Children</p>
            <p className="user-profile__value">
              {user.children}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              Type of residence
            </p>
            <p className="user-profile__value">
              {user.residence_type}
            </p>
          </div>
        </div>
      </div>
      <div className="user-profile__section">
        <h4 className="user-profile__title">
          Education and Employment
        </h4>
        <div className="user-profile__grid user-profile__grid--education">
          <div className="user-profile__item">
            <p className="user-profile__label">
              level of education
            </p>
            <p className="user-profile__value">
              {user.education_level}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              employment status
            </p>
            <p className="user-profile__value">
              {user.employment_status}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              sector of employment
            </p>
            <p className="user-profile__value">
              {user.sector_of_employment}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              Duration of employment
            </p>
            <p className="user-profile__value">
              {user.duration_of_employment}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">office email</p>
            <p className="user-profile__value">
              {user.office_email}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Monthly income</p>
            <p className="user-profile__value">
              {user.monthly_income}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">loan repayment</p>
            <p className="user-profile__value">
              {user.loan_repayment}
            </p>
          </div>
        </div>
      </div>
      <div className="user-profile__section">
        <h4 className="user-profile__title">
          Socials
        </h4>
        <div className="user-profile__grid">
          <div className="user-profile__item">
            <p className="user-profile__label">Twitter</p>
            <p className="user-profile__value">
              {user.twitter}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Facebook</p>
            <p className="user-profile__value">
              {user.facebook}
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Instagram</p>
            <p className="user-profile__value">
              {user.instagram}
            </p>
          </div>
        </div>
      </div>
      <div className="user-profile__section">
        <h4 className="user-profile__title">
          Guarantor
        </h4>
        {user.guarantors && user.guarantors.length > 0 && (
          <div className="user-profile__grid user-profile__grid--guarantor">
            <div className="user-profile__item">
              <p className="user-profile__label">full Name</p>
              <p className="user-profile__value">
                {user.guarantors[0].full_name}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Phone Number</p>
              <p className="user-profile__value">
                {user.guarantors[0].phone_number}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Relationship</p>
              <p className="user-profile__value">
                {user.guarantors[0].relationship}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Email Address</p>
              <p className="user-profile__value">
                {user.guarantors[0].email}
              </p>
            </div>
          </div>
        )}
        {user.guarantors && user.guarantors.length > 1 && (
          <div className="user-profile__grid-row-2">
            <div className="user-profile__item">
              <p className="user-profile__label">full Name</p>
              <p className="user-profile__value">
                {user.guarantors[1].full_name}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Phone Number</p>
              <p className="user-profile__value">
                {user.guarantors[1].phone_number}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Relationship</p>
              <p className="user-profile__value">
                {user.guarantors[1].relationship}
              </p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Email Address</p>
              <p className="user-profile__value">
                {user.guarantors[1].email}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
