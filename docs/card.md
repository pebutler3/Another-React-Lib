## Usage

```
import React from 'react';
import { Card } from "another-react-lib"

function App() {
  return (
    <div className="App">
      <Card
        boxShadow={1}
        cardHeight={300}
        description={'Wow! What an amazing description you have there!'}
        marginTop={10}
        marginRight={10}
        marginBottom={10}
        marginLeft={10}
        paddingTop={10}
        paddingRight={10}
        paddingTop={10}
        paddingLeft={10}
        title={'An impressive title'}
      />
    </div>
  );
}

export default App;
```

### Properties

Property       | Type   | Required   | Default value | Description                             |
:------------- | :----- | :--------- | :------------ | :-------------------------------------- |
`boxShadow`    | number | no         | 1             | Options: 0, 1, 2
`cardHeight`   | number | no         | 300           | Enter any number for pixel height
`description`  | string | yes        | 'Description' | Enter description string
`marginTop`    | number | no         | 10            | Enter any number for pixel Top Margin
`marginRight`  | number | no         | 10            | Enter any number for pixel Right Margin
`marginBottom` | number | no         | 10            | Enter any number for pixel Bottom Margin
`marginLeft`   | number | no         | 10            | Enter any number for pixel Left Margin
`paddingTop`   | number | no         | 10            | Enter any number for pixel Top Padding
`paddingRight` | number | no         | 10            | Enter any number for pixel Right Padding
`paddingBottom`| number | no         | 10            | Enter any number for pixel Bottom Padding
`paddingLeft`  | number | no         | 10            | Enter any number for pixel Left Padding
`title`        | string | no         | 'Title'       | Enter title string

