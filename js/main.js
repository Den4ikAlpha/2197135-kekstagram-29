const MAX_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATARS = 1;
const MAX_AVATARS = 6;

const getRandomNumber = (a, b) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	const result = Math.random() * (upper - lower + 1) + lower;
	return Math.floor(result);
};

const getRandomArrayEllement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomAvatars = () => {
	const avatars = [];
	while (avatars.length <= MAX_AVATARS - 1) {
		avatars.push(`img/avatar-${getRandomNumber(MIN_AVATARS, MAX_AVATARS)}.svg`);
	}
	return getRandomArrayEllement(avatars);
};

const MESSAGES = [
	'Всё отлично',
 	'В целом все неплохо, но не все',
  	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Влад', 'Денис','Дима', 'Артур', 'AnalExecuter69', 'Альберт'];

// const createComment = (undefined, index = 0) => {
// 	const id = index + 1;
// 	return { id, avatar: getRandomAvatars(), message: getRandomArrayEllement(MESSAGES), name: getRandomArrayEllement(NAMES)};
// };

// const comments = Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment);

const DESCRIPTIONS = [
	'фото отдыха',
	'фото со сьемок',
	'наш ужин',
	'наш отпуск',
	'вот так и работаем',
	'лучшее фото',
	'красивое фото',
	'как то раз в темно месте',
	'вот такие виды',
	'все лучшее нам',
	'весенний фильтр',
	'лучшие в стране',
	'как вам?',
	'придумайте сами',
	'и что вы хотите сказать?',
	'вот что сегодня случилось',
	'как то раз зашел и увидел это',
	'просто кайф',
	'не судите строго',
	'по лучше прежнего',
	'за то как красиво',
	'и вот так бывает',
	'ну и что тут такого?',
	'моя любовь',
	'а так можно было?'
];

const getIDGenerator = () => {
	let latestID = 0;
	return () => {
		latestID = latestID + 1;
		return latestID;
	};
};

const photoID = getIDGenerator();
const commentID = getIDGenerator();
const photoNumberURL = getIDGenerator();

const createComment = () => ({id: commentID(), avatar: getRandomAvatars(), message: getRandomArrayEllement(MESSAGES), name: getRandomArrayEllement(NAMES)});


const createPhoto = () => {
	const comments = Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment);
	return {id: photoID(), url: `photos/${photoNumberURL()}.jpg`, description: getRandomArrayEllement(DESCRIPTIONS), likes: getRandomNumber(MIN_LIKES, MAX_LIKES), comments};
};

const randomPhotos = Array.from({length:MAX_PHOTOS}, createPhoto);

console.log(randomPhotos);
