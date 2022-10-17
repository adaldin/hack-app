import Container from "react-bootstrap/Container";
import { DashboardRoutes } from "./dashRoutes/DashRoutes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container fluid className="p-0 bg-dark">
        <DashboardRoutes />
      </Container>
    </AuthProvider>
  );
}

export default App;
