import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            // style={{ backgroundColor: `${get_rand_color()}` }}
            style={{ backgroundColor: `${randomColor(190)}` }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

// function get_rand_color() {
//   var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//   while (color.length < 6) {
//     color = '0' + color;
//   }
//   return '#' + color;
// }

function randomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length === 1 ? '0' + s : s;
  }
  return (
    '#' +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}
