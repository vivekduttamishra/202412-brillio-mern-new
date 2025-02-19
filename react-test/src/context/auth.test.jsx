import { render, screen, waitFor  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider, useAuth } from "./auth";
import { expect, test, vi, beforeEach, afterEach } from "vitest";



const TestLogin = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <p>Current User: {user?.name || "None"}</p>
      <button onClick={() => login("admin@gmail.com", "p@ssword")}>Login as Admin</button>
      <button onClick={() => login("user@gmail.com", "p@ssword")}>Login as User</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

test("starts with no user logged in", () => {
  render(
    <AuthProvider>
      <TestLogin />
    </AuthProvider>
  );

  expect(screen.getByText("Current User: None")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
});

test("logs in as user", async () => {
  render(
    <AuthProvider>
      <TestLogin />
    </AuthProvider>
  );

  await userEvent.click(screen.getByRole("button", { name: "Login as User" }));


  await waitFor(() =>
    expect(screen.getByText("Current User: John Doe")).toBeInTheDocument()
  );
});

test("logs in as admin", async () => {
  render(
    <AuthProvider>
      <TestLogin />
    </AuthProvider>
  );

  await userEvent.click(screen.getByRole("button", { name: "Login as Admin" }));

  await waitFor(() =>
    expect(screen.getByText("Current User: Vivek Dutta Mishra")).toBeInTheDocument()
  );
});

test("logs out the user", async () => {
  render(
    <AuthProvider>
      <TestLogin />
    </AuthProvider>
  );

  await userEvent.click(screen.getByRole("button", { name: "Login as User" }));



  await waitFor(() =>
    expect(screen.getByText("Current User: John Doe")).toBeInTheDocument()
  );

  await userEvent.click(screen.getByRole("button", { name: "Logout" }));

  await waitFor(() =>
    expect(screen.getByText("Current User: None")).toBeInTheDocument()
  );
});
 