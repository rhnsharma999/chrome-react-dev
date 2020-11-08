import { shallow } from "enzyme"
import * as React from "react"
import RootComponent from ".."

describe("this is a sample test", () => {
  it("executes succesfully", () => {
    const wrapper = shallow(<RootComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})
