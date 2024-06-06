import { ChildrenProps, TokenSliceProps } from "@/types";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Heading, Paragraph } from "./ui/typography";

function User({ children }: ChildrenProps) {
  const { isTokenUserAvailable } = useSelector(
    (state: TokenSliceProps) => state.token
  );

  return !isTokenUserAvailable ? (
    <div className="flex fixed w-full justify-center bg-white items-center min-h-svh">
      <div className="p-4">
        <div className="bg-white p-4 rounded-xl drop-shadow-lg sm:p-10">
          <Heading
            as="h2"
            className="font-normal text-center text-xl sm:text-2xl"
          >
            Hai, masuk dulu yuk baru lanjut
          </Heading>
          <div className="flex justify-center flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-7 w-full">
            <Link to="/auth/login" className="w-full">
              <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-full px-4 py-7">
                <Paragraph>Masuk</Paragraph>
              </Button>
            </Link>
            <Link to="/auth/registration" className="w-full">
              <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-full px-4 py-7">
                <Paragraph>Daftar</Paragraph>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    children
  );
}

function UserAuth({ children }: ChildrenProps) {
  const { isTokenUserAvailable } = useSelector(
    (state: TokenSliceProps) => state.token
  );

  return isTokenUserAvailable ? <Navigate to="/" /> : children;
}

function Admin({ children }: ChildrenProps) {
  const { isTokenAdminAvailable } = useSelector(
    (state: TokenSliceProps) => state.token
  );

  return isTokenAdminAvailable ? children : <Navigate to="/auth/login/admin" />;
}

function AdminAuth({ children }: ChildrenProps) {
  const { isTokenAdminAvailable } = useSelector(
    (state: TokenSliceProps) => state.token
  );

  return isTokenAdminAvailable ? <Navigate to="/admin" /> : children;
}

const ProtectedRoute = {
  User,
  UserAuth,
  Admin,
  AdminAuth,
};

export default ProtectedRoute;
