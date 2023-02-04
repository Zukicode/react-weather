import React from 'react';

//Redux
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

//styles
import classes from './Today.module.scss';

const Today = () => {
	const [times, setTimes] = React.useState('');
	const { info, status, activeCity } = useSelector(state => state.weather);

	React.useEffect(() => {
		const timer = setInterval(() => {
			let date = new Date();
			let time = [date.getHours(), date.getMinutes()];
			if (time[0] < 10) {
				time[0] = '0' + time[0];
			}
			if (time[1] < 10) {
				time[1] = '0' + time[1];
			}
			setTimes([time[0], time[1]].join(':'));
		}, 1000);

		return () => clearInterval(timer);
	}, [times]);

	return (
		<div className={classes.today}>
			{status === 'error' ? (
				<h1 style={{ margin: '100px auto', color: 'red' }}>
					Виникла помилка, спробуйте пізніше!
				</h1>
			) : status === 'loading' ? (
				<Loader />
			) : (
				<>
					<div className={classes.temperature}>
						<div className={classes.text_temp}>
							<h1>{info.temp}°</h1>
							<h1>Сьогодні</h1>
						</div>
						{info.cloud_pct > 50 ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='119'
								height='119'
								viewBox='0 0 40 31'
								fill='none'>
								<path
									opacity='0.32'
									d='M34 21C37.314 21 40 18.314 40 15C40 11.686 37.314 9 34 9H33.938C33.978 8.672 34 8.338 34 8C34 3.582 30.418 0 26 0C22.5 0 19.524 2.248 18.44 5.378C17.67 5.132 16.852 5 16 5C11.582 5 8 8.582 8 13C8 17.418 11.582 21 16 21C16.69 21 17.36 20.912 18 20.748V21H34Z'
									fill='#73A5E6'
								/>
								<path
									d='M8 31C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C11.518 11.68 14.946 9 19 9C23.97 9 28 13.03 28 18C28 18.47 27.964 18.93 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8Z'
									fill='url(#paint0_linear_2_551)'
								/>
								<path
									d='M10 18C10 22.97 14.03 27 19 27C23.502 27 27.23 23.696 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C10.136 16.198 10 17.082 10 18Z'
									fill='url(#paint1_radial_2_551)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_2_551'
										x1='18'
										y1='9'
										x2='18'
										y2='31'
										gradientUnits='userSpaceOnUse'>
										<stop stopColor='#9FC7FF' />
										<stop offset='1' stopColor='#9BC1F5' />
									</linearGradient>
									<radialGradient
										id='paint1_radial_2_551'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(13.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)'>
										<stop stopColor='#486DA8' stopOpacity='0.4' />
										<stop offset='1' stopColor='#486DA8' stopOpacity='0' />
									</radialGradient>
								</defs>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='119'
								height='119'
								viewBox='0 0 119 119'
								fill='none'>
								<path
									d='M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z'
									fill='url(#paint0_linear_2_438)'
								/>
								<path
									d='M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z'
									fill='#FFB300'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_2_438'
										x1='59.5229'
										y1='31.0143'
										x2='59.5229'
										y2='87.2546'
										gradientUnits='userSpaceOnUse'>
										<stop stopColor='#FFC227' />
										<stop offset='1' stopColor='#FFB300' />
									</linearGradient>
								</defs>
							</svg>
						)}
					</div>
					<div className={classes.time_city}>
						<p>Час: {times}</p>
						<p>Місто: {activeCity}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Today;
