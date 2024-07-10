import React from "react";
import "./account.css";
import { accounts } from "../../../constants/constants";
import Button from "../../../components/button/Button";
import { FaChevronRight } from "react-icons/fa6";

const Account = () => {
  return (
    <section className="sectionContainer accountExtended">
      <h2>Use Our music</h2>
      <div className="divider" />
      <div className="account-wrapper">
        {/* Left Side */}
        <div className="premium-wrapper">
          {accounts.gold.map((ag) => (
            <React.Fragment key={ag.id}>
              <h2>{ag.title}</h2>
              <div className="account-img-wrapper">
                <img src={ag.img} alt="account gold images" />
              </div>
              <p>{ag.description}</p>
              <div className="button-wrapper">
                <Button
                  children="Learn More"
                  iconLeft={<FaChevronRight />}
                  outline
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Right Side */}
        <div className="premium-wrapper">
          {accounts.premium.map((ap) => (
            <React.Fragment key={ap.id}>
              <h2>{ap.title}</h2>
              <div className="account-img-wrapper">
                <img src={ap.img} alt="account premium images" />
              </div>
              <p>{ap.description}</p>
              <div className="button-wrapper">
                <Button
                  children="Learn More"
                  iconLeft={<FaChevronRight />}
                  outline
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Account;
