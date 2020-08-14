import React from "react";
import { View, Button } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: "center", alignItems: "center"
    }}>
      <Button title="Sign In" onPress={handleSign} />
    </View>
  );
};

export default SignIn;
