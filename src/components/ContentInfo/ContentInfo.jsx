import React from 'react';

//components
import Today from './Today/Today';
import Detalies from './Detalies/Detalies';

//styles
import classes from './ContentInfo.module.scss';

const ContentInfo = () => {
	return (
		<div className={classes.content_info}>
			<Today />
			<Detalies />
		</div>
	);
};

export default ContentInfo;
