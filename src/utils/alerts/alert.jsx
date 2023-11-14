import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './styles.css'
import theme from '../../styles/theme'

const alertSwal = withReactContent(Swal)

export function Alert(title) {
  alertSwal.fire({
    title,
    position: 'top',
    background: theme.COLORS.BACKGROUND.DARK,
    confirmButtonColor: theme.COLORS.WHITE,
    customClass: {
      container: 'alert__container',
      title: 'alert__title',
      confirmButton: 'alert__confirm-button'
    }
  })
}

export function Erro(title) {
  alertSwal.fire({
    title,
    position: 'top',
    background: theme.COLORS.RED,
    confirmButtonColor: theme.COLORS.PINK,
    customClass: {
      container: 'error__container',
      title: 'error__title',
      confirmButton: 'error__confirm-button'
    }
  })
}

export function Confirm(
  title,
  confirmButtonText,
  cancelButtonText = 'Cancelar'
) {
  return alertSwal.fire({
    title,
    position: 'top',
    showCancelButton: true,
    background: theme.COLORS.BACKGROUND.DARK,
    confirmButtonColor: theme.COLORS.PINK,
    cancelButtonColor: theme.COLORS.GRAY.EXTRA_DARK,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      container: 'confirm__container',
      title: 'confirm__title',
      confirmButton: 'confirm__confirm-button',
      cancelButton: 'confirm__cancel-button'
    }
  })
}
