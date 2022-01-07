import React from "react";
import { createDrawer Navigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
const Drawer = createDrawerNavigator():
const DrawerNavigator - () => {
return
<Drawer. Navigator>
<Drawer. Screen name="Home" component={StackNavigator} />
<Drawer. Screen name="Profile" component={Profile} />
</Drawer. Navigator>
):
};
export default DrawerNavigator;
renderItem ({ item: post }) => {
    return <Postcard post={post} navigation={this.props.navigation} />;
    };
    