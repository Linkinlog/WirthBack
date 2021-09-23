import React, { useRef, useState } from 'react';
import { editorStateFromRaw, MegadraftEditor } from 'megadraft';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
//Import megadraft.css
import 'megadraft/dist/css/megadraft.css';

export const Editor = () => {
	const [editorState, setEditorState] = useState(editorStateFromRaw(null));
	const textB = useRef();

	const onChange = (editorState) => {
		setEditorState(editorState);
		// Your function to save the content
		// save_my_content(content);
		const rawContentState = convertToRaw(editorState.getCurrentContent());
		// console.log(rawContentState);
		const markup = draftToHtml(rawContentState);
		// console.log(markup);
		textB.current.innerHTML = markup;
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 hotBorder mb-3'>
					<MegadraftEditor editorState={editorState} onChange={onChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6 offset-md-3 hotBorder'>
					<pre ref={textB} id='textB'></pre>
				</div>
			</div>
		</div>
	);
};

export default Editor;
