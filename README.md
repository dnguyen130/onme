# onme

"Create a connection, with a little liquid courage."

Just a few BCIT D3 students developing Vancity's next big dating app!

### File/Folder Creation Conventions

__Indent Tab Size__
* 2

__Branch Naming__
  
* firstinitialLastname (lowercase)
* Examples: For Jeremy Carmona, branch name would be "jcarmona"
  
__Component Location & Naming__
* Pascal Case (Capitalize each word)
* Name the file itself and put it in its relative location.
* Button, card, and text components go in their respective folder. One-shot components go in that page's folder. Any other repeated components go in global
* Examples: BigButton, SmallButton, Title, Input

__Props__

* ${props => props.name}


```
const Button = styled.TouchableOpacity`
  background-color: ${props => props.changeButtonColor};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  width: 353px;
  min-height: 53px;
`;

const BigButton = ({
  buttonText = "Sign In",
  bgColor = "#FE4370;",
  onPress = ()=>{}
}) => {
  return (
    <Button changeButtonColor={bgColor} onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}
```

__Coding Conventions__
* Place global imports at the top (such as React, styled)
* Create an empty new line
* Place internal imports (components in components) after the new line
* Name any styled components used within a component Pascal Case
* Use '*Cont' for containing View elements
* Generally, try and use names that are obvious and consistent
* Name and export the main component the same name as the file
* Place styles before the main component

__Pages Location & Naming__
* Pages are all located within the pages folder
* Pascal Case (refer to component naming convention for examples)

__Viewing Screens and Components__

Viewing Screens
* Comment out first export as shown below
```
// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Viewing Components
* Comment out second export as shown below
```
export {default} from './storybook'; 

// export default function App() {
//   return (
//     <NavigationContainer styles={styles.centerCont}>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Sign Up" component={SignUp} />
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//         {/* <Stack.Screen name="Restaurant Selection" component={RestaurantSelection} /> */}
//         {/* <Stack.Screen name="Restaurant Menu Food" component={RestaurantMenuFood} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
```
