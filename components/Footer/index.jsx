import React from "react";
import "./footer.css";
// import Button from "../Button";

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <aside className="footer-brand">
    //       <div className="footer-icon"></div>
    //       <p className="brand-text">
    //         ATOMIC Industries Ltd.
    //         <br />
    //         Providing reliable atoms since 1945.
    //       </p>
    //     </aside>
    //     <nav className="mx-auto">
    //       <h6 className="footer-heading">Services</h6>
    //       <a className="footer-link">Branding</a>
    //       <a className="footer-link">Design</a>
    //       <a className="footer-link">Marketing</a>
    //       <a className="footer-link">Advertisement</a>
    //     </nav>
    //     <nav className="mx-auto">
    //       <h6 className="footer-heading">Company</h6>
    //       <a className="footer-link">About us</a>
    //       <a className="footer-link">Contact</a>
    //       <a className="footer-link">Jobs</a>
    //       <a className="footer-link">Press kit</a>
    //     </nav>
    //     <nav className="mx-auto">
    //       <h6 className="footer-heading">Legal</h6>
    //       <a className="footer-link">Terms of use</a>
    //       <a className="footer-link">Privacy policy</a>
    //       <a className="footer-link">Cookie policy</a>
    //     </nav>
    //   </div>
    // </footer>

    <div class="bg-background p-8 footer mt-20">
      <div class="max-w-[1253px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div class="mb-6 md:mb-0 px-2">
          <h2 class="text-2xl font-semibold text-primary">Becute</h2>
          <p class="text-muted-foreground">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional.
          </p>
          {/* <div class="flex space-x-4 mt-4">
            <img src="https://placehold.co/40x20?text=Visa" alt="Visa" />
            <img
              src="https://placehold.co/40x20?text=MasterCard"
              alt="MasterCard"
            />
            <img src="https://placehold.co/40x20?text=PayPal" alt="PayPal" />
            <img src="https://placehold.co/40x20?text=Skrill" alt="Skrill" />
            <img src="https://placehold.co/40x20?text=Maestro" alt="Maestro" />
            <img
              src="https://placehold.co/40x20?text=Visa Electron"
              alt="Visa Electron"
            />
          </div> */}
        </div>
        <div class="mb-6 md:mb-0 px-2 max-w-fit">
          <h3 class="text-lg font-semibold text-primary">OUR OFFER</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Frequently
              </a>
            </li>
          </ul>
        </div>
        <div class="mb-6 md:mb-0 px-2 max-w-fit">
          <h3 class="text-lg font-semibold text-primary">QUICK LINKS</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                My Account
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Shopping Cart
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Login
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Register
              </a>
            </li>
            <li>
              <a href="#" class="text-muted-foreground hover:text-primary">
                Checkout
              </a>
            </li>
          </ul>
        </div>
        <div className="md:mr-3 overflow-hidden">
          <h3 class="text-lg font-semibold text-primary uppercase">Socials</h3>
          <p class="text-muted-foreground">
            We are available for you on this platforms
          </p>
          {/* <div class="flex mt-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              class="border border-border rounded-l-md p-2"
            />
            <Button className="btn-primary" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
              Subscribe
            </Button>
          </div> */}
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-muted-foreground hover:text-primary">
              Facebook
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              Twitter
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              Instagram
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 text-muted-foreground">
        © {new Date().getFullYear()} Powered by AmourRoyales. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
