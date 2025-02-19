import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/auth";
import App from "../App";
import {vi, it, describe} from "vitest";
import { useAuth } from "../context/auth";

describe('mocked context', () => {

    vi.mock("../context/auth", () => ({
        useAuth: vi.fn(),
      }));
      
      beforeEach(() => {
        // Set up a fresh mock before each test
        useAuth.mockReturnValue({
          user: null,
          login: vi.fn().mockResolvedValue(), // Mock login function
          error: "",
        });
      });
      
      afterEach(() => {
        // Clear mock calls after each test
        vi.clearAllMocks();
      });


})

test("shows an error message when login fails", async () => {
    render(
        <AuthProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <App />
            </MemoryRouter>
        </AuthProvider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "user@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "wrongp@ssword");

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for error message to appear
    await waitFor(() => {
        expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
});


test("logs in as a user and redirects to profile", async () => {
    render(
        <AuthProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <App />
            </MemoryRouter>
        </AuthProvider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "user@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "p@ssword");

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
        expect(screen.getByText(/Profile Page/i)).toBeInTheDocument();
    });
});

test("logs in as admin and redirects to admin dashboard", async () => {
    render(
        <AuthProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <App />
            </MemoryRouter>
        </AuthProvider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "admin@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "p@ssword");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
        expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
    });
});

test("logs out the user and redirects to home", async () => {
    render(
        <AuthProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <App />
            </MemoryRouter>
        </AuthProvider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "user@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "p@ssword");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
        expect(screen.getByText(/Profile Page/i)).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText(/Logout/i));

    await waitFor(() => {
        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });
});

