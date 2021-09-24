import Axios from '../redux/Axios';

export const Helper = {
  getInitials(string) {
    if (!string) {
      return '';
    }

    const firstInitial = string.split(' ')[0] ? string.split(' ')[0] : '';
    const secondInitial = string.split(' ')[1] ? string.split(' ')[1] : '';
    return `${firstInitial[0]}${secondInitial ? secondInitial[0] : ''}`;
  },

  makeHash(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  formatToNaira(amout) {
    const e = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000];

    amout = parseFloat(amout);

    const pieces = amout.toFixed(0).replace('.', '.').split('');

    let ii = pieces.length - (0 ? 0 + 1 : 0);

    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ',');
    }

    return '₦' + pieces.join('');
  },

  formatToNumber(amout) {
    const e = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000];

    amout = parseFloat(amout);

    const pieces = amout.toFixed(0).replace('.', '.').split('');

    let ii = pieces.length - (0 ? 0 + 1 : 0);

    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ',');
    }

    return pieces.join('');
  },

  truncateWords(sentence, amount, tail = '...') {
    const words = sentence.split(' ');

    if (amount >= words.length) {
      return sentence;
    }

    const truncated = words.slice(0, amount);
    return `${truncated.join(' ')}${tail}`;
  },

  isCloseToBottom({layoutMeasurement, contentOffset, contentSize}) {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  },

  async getData(url) {
    try {
      const response = await Axios.get(url);
      return response.data;
    } catch (err) {
      return [];
    }
  },

  async postData(url, formData) {
    try {
      const response = await Axios.post(url, formData);
      return response.data;
    } catch (err) {
      return [];
    }
  },
};
