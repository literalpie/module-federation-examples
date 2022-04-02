import * as React from 'react';

// lodash doesn't treeshake. If we do import {add}, it imports all of lodash. If we import from a specific entry, it only loads that entry.
// import { add } from 'lodash';

// sharing rxjs makes the bundle size 210kb vs 170kb without sharing. Sharing reduced duplication (saving 5kb), but also prevents tree-shaking (adding 13kb).
// If I make my own library that exports only 'of' from rxjs, and share _that_ library, the size goes down to 159kb - best of both worlds, I think! (as long as you know exactly what you want to use ahead of time)
// import { of } from 'my-rxjs';

// this even works if we don't bundle the library, but instead use references within the monorepo (as long as we set up the 'shared' value right). 152kb
import { of } from '@shared-context/shared-library';

// All this stuff even works if you want to add extra imports in addition to the shared imports (brings it to 158kb, an expected addition) (I'm not super confident this will work in all cases)
import { map } from 'rxjs/operators';

const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => {
  of(17).pipe(
    map(a => a + 1),
  ).subscribe(console.log);
  // console.log(add(2, 2));
  return (
    <div>
      <h1>Typescript</h1>
      <h2>App 1</h2>

      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>

    </div>
  )
};

export default App;
