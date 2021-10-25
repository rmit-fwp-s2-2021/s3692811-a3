import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useInput from "../../../custom_hook/useInput";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
import Home from "../Home";
import { useEffect } from "react";

/*
    This test is used to check the custom hook "useInput(value, any)"
    I want to make sure the useState inside useInput work perfectly.
    If I passed a "Changed" value to it, the input also will be set to "Changed"
*/
describe("handleChangeInput_of_userInputHook", () => {
  it("work", () => {
    let result;
    function HookWrapper() {
      const { input, handleChangeInput } = useInput("Changed", "");

      result = input;

      return null;
    }
    shallow(<HookWrapper />);
    expect(result).toBe("Changed");
  });
});

/*
    This test is used to check Task E
   
    localStorage.getItem(a) will return "null" if it cannot find the item
    with  the key "a". I will utilize this to make sure: 
    - If I click the "Search" button, the application will store 
    user input in localStorage with the key "input" and its value 
    is the text inside the search bar.
    No matter what the input is, there will always be a key "input" 
    in localStorage.
    - If it's not, there should be some problems with this features and the 
    test will fail.
*/
describe("CheckSearchButton", () => {
  it("onClick", () => {
    const { queryByTitle, queryAllByTitle } = render(<Home />);
    const btn = queryByTitle("search");

    const searchBar = queryByTitle("input");
    fireEvent.change(searchBar, { target: { value: "Nikolai" } });
    fireEvent.click(btn);
    const cards = queryAllByTitle("card");

    expect(localStorage.getItem("input")).toBe("Nikolai");
  });
});
