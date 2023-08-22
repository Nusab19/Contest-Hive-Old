import "/styles/main.css";
import Nav from "/components/Nav";

export const metadata = {
  title: "Contest Hive",
  description: "Contest Hive provides you with the lastest informations about the upcoming contests from 7 different platforms"
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default layout;
