import App from "./App";
import { render } from "@testing-library/react";

describe('Render application', () => {
    test('it renders', () => {
        render(<App/>);
    })
})