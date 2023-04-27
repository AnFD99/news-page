export const formatDate = (date: number) => {
   const humanDate = new Date(date * 1000)

   return new Intl.DateTimeFormat().format(humanDate)
}

export const formatDateWithTime = (date: number) => {
   return new Date(date * 1000).toLocaleString()
}

