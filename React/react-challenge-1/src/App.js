import "./styles.css";

console.clear();

const socialIcons = [
  {
    platform: "google",
    www: "www.google.com",
    logo: "https://img.icons8.com/material-sharp/24/1A2E35/google-logo.png"
  },
  {
    platform: "facebook",
    www: "www.facebook.com",
    logo: "https://img.icons8.com/material-outlined/24/1A2E35/facebook-f.png"
  },
  {
    platform: "twitter",
    www: "www.twitter.com",
    logo: "https://img.icons8.com/material-rounded/24/1A2E35/twitter.png"
  },
  {
    platform: "instagram",
    www: "www.instagram.com",
    logo: "https://img.icons8.com/material-rounded/24/1A2E35/instagram-new.png"
  }
];

function FormTitle(props) {
  return <h1>{props.title}</h1>;
}

function SocialIcon(props) {
  return (
    <a href={props.www} target="_blank">
      <img src={props.logo} />
    </a>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
      {socialIcons.map((icon) => (
        <a href={icon.www} target="_blank">
          <img src={icon.logo} />
        </a>
      ))}
    </div>
  );
}

// function SocialIcons() {
//   return (
//     <div className="social-icons">
//       <SocialIcon www={socialIcons[0].www} logo={socialIcons[0].logo} />
//       <SocialIcon www={socialIcons[1].www} logo={socialIcons[1].logo} />
//       <SocialIcon www={socialIcons[2].www} logo={socialIcons[2].logo} />
//       <SocialIcon www={socialIcons[3].www} logo={socialIcons[3].logo} />
//     </div>
//   );
// }

function FormInput(props) {
  return (
    <div className="form-input">
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

function PolicyAndTerms() {
  return (
    <div className="policy">
      <input type="checkbox" name="terms" />
      <p>
        I agree to <span className="text-deco">Terms</span> and{" "}
        <span className="text-deco">Privacy Policy</span>.
      </p>
    </div>
  );
}

function SignButton(props) {
  return (
    <input
      className={`cta-button 
      button-${props.isPrimary ? "primary" : "secondary"}`}
      type="submit"
      value={props.text}
    />
  );
}

function Form() {
  return (
    <form>
      <p>or use your email for registration:</p>
      <FormInput type="text" placeholder="John Doe" label="Name:" />
      <FormInput type="email" placeholder="Johndoe@gmail.com" label="Email:" />
      <FormInput type="password" placeholder="Password" label="Password:" />
      <PolicyAndTerms />
      <div className="sign-buttons">
        <SignButton text="Sign Up" isPrimary />
        <SignButton text="Sign In" />
      </div>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="left-side">
        <FormTitle title="Create Account" />
        <SocialIcons />
        <Form />
      </div>
      <div className="right-side">
        <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </div>
    </div>
  );
}
