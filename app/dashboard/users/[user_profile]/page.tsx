import React from "react";

const Page = () => {
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
              Grace Effiom
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Phone Number</p>
            <p className="user-profile__value">
              07060780922
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Email Addressr</p>
            <p className="user-profile__value">
              grace@gmail.com
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Bvn</p>
            <p className="user-profile__value">
              07060780922
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Gender</p>
            <p className="user-profile__value">
              Female
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Marital status</p>
            <p className="user-profile__value">
              Single
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Children</p>
            <p className="user-profile__value">
              None
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              Type of residence
            </p>
            <p className="user-profile__value">
              Parent’s Apartment
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
              B.Sc
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              employment status
            </p>
            <p className="user-profile__value">
              Employed
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              sector of employment
            </p>
            <p className="user-profile__value">
              FinTech
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">
              Duration of employment
            </p>
            <p className="user-profile__value">
              2 years
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">office email</p>
            <p className="user-profile__value">
              grace@lendsqr.com
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Monthly income</p>
            <p className="user-profile__value">
              ₦200,000.00- ₦400,000.00
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">loan repayment</p>
            <p className="user-profile__value">
              40,000
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
              @grace_effiom
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Facebook</p>
            <p className="user-profile__value">
              Grace Effiom
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Instagram</p>
            <p className="user-profile__value">
              @grace_effiom
            </p>
          </div>
        </div>
      </div>
      <div className="user-profile__section">
        <h4 className="user-profile__title">
          Guarantor
        </h4>
        <div className="user-profile__grid user-profile__grid--guarantor">
          <div className="user-profile__item">
            <p className="user-profile__label">full Name</p>
            <p className="user-profile__value">
              Debby Ogana
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Phone Number</p>
            <p className="user-profile__value">
              07060780922
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Relationship</p>
            <p className="user-profile__value">
              Sister
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Email Address</p>
            <p className="user-profile__value">
              debby@gmail.com
            </p>
          </div>
        </div>
        <div className="user-profile__grid-row-2">
          <div className="user-profile__item">
            <p className="user-profile__label">full Name</p>
            <p className="user-profile__value">
              Debby Ogana
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Phone Number</p>
            <p className="user-profile__value">
              07060780922
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Relationship</p>
            <p className="user-profile__value">
              Sister
            </p>
          </div>
          <div className="user-profile__item">
            <p className="user-profile__label">Email Address</p>
            <p className="user-profile__value">
              debby@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
