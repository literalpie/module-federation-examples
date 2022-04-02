import * as React from 'react';
import { of } from '@shared-context/shared-library';

// import { add } from 'lodash';
// import { of } from 'rxjs';
// import { of } from 'my-rxjs';

const Button = () => {
  console.log(of);
  // console.log('lodash!', add(2, 4));
  return <button>App 2 Button</button>
};

export default Button;
