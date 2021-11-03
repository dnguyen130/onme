# onme

### Naming Conventions

__Indent Tab Size__
* 2

__Branch Naming__
  
* firstinitialLastname (lowercase)
* Examples: For Jeremy Carmona, branch name would be "jcarmona"
  
__Component Naming__

* ComponentName (Capitalize first letter of each word)
* Examples: BigButton, SmallButton, Title, Input

* For each component:
  * Create a new folder under the Comps folder
  * Name it (ComponentName)
  * Create an index.js file under (ComponentName) folder

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
