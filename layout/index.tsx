import Header from "../components/Header";
import { IChildrenProp } from "../IModels";
import classes from "./layout.module.css";

export default function LayoutDefault(props: IChildrenProp) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main className={classes.container}>{children}</main>
    </div>
  );
}
