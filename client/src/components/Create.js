// Import React dependencies.
import React, { useMemo, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

export const Create = () => {
	const editor = useMemo(() => withReact(createEditor()), []);
	// Add the initial value when setting up our state.
	const [value, setValue] = useState([
		{
			type: 'paragraph',
			children: [{ text: '' }],
		},
	]);

	return (
		<Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
			<Editable />
		</Slate>
	);
};

export default Create;
