import { render } from "@testing-library/react"
import TaskList from "./TaskList"
import React from "react"

// 0 - Renderiza el componente
test('0 - Renderiza el componente', () => {
    const r = render(<TaskList />);
    expect(r).toBeDefined();
})