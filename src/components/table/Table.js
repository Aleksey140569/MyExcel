import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';
import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@core/ExcelComponent';

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
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
