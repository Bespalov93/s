import axios from 'axios';

export default function BasketPage() {
	const sendDataToServer = async (data) => {
		try {
			const response = await axios.post('http://localhost:8000/cart', data);
			console.log('Данные успешно отправлены на сервер:', response.data);
		} catch (error) {
			console.error('Ошибка при отправке данных на сервер:', error);
		}
	};

  return (
    <div className="BasketPage">
			<button onClick={sendDataToServer()}></button>
    </div>
  );
}
