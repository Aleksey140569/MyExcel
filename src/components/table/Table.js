import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: [
        'mousedown',
      ]
    })
  }

  toHTML() {
    return createTable(45);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizeable"]');
      const coords = $parent.getCoords();
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

      document.onmousemove = (e) => {
        const delta = Math.floor(e.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
        cells.forEach((el) => el.style.width = value + 'px');
      }

      document.onmouseup = (e) => {
        document.onmousemove = null;
      }
    }
  }
}