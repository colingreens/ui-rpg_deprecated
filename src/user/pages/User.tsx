import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIelements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./User.css";

export default function User() {
  return (
    <Card className="center">
      <div className="login">
        <h1 className="title">GAME TITLE</h1>
        <form
          onClick={() => {
            console.log("submitted");
          }}
        >
          <Input
            element="input"
            id="name"
            type="text"
            label="Username"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter your username"
            onInput={() => {}}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password of at least 5 characters"
            onInput={() => {}}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Card>
  );
}
