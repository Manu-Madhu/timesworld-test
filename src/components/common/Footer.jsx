import SocialIcons from "../login/SocialIcons";
import { FooterIcons } from "../../utils/socialLinks";

const Footer = () => {
  return (
    <main className="common-container px-4 px-md-3 mt-5 h-50 d-flex flex-column align-items-center justify-content-md-center">
      {/* Icons */}
      <section className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
        {FooterIcons.map(({ id, icon }) => (
          <SocialIcons key={id} icon={icon} />
        ))}
      </section>
      <section className="text-center mt-5 d-flex flex-column gap-2 ">
        <h3 className="footer-text">Example@email.com</h3>
        <h3 className="footer-text">
          Copyright © 2020 Name. All right reserved{" "}
        </h3>
      </section>
    </main>
  );
};

export default Footer;
