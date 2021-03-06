import fmtEvent from '../_util/fmtEvent';
Component({
  props: {
    className: '',
    value: '',
    placeholder: '',
    onSelect: function onSelect() {}
  },
  methods: {
    onPickerTap: function onPickerTap(e) {
      var event = fmtEvent(this.props, e);
      this.props.onPickerTap(event);
    }
  }
});