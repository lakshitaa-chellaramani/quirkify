const Activity = ({ name, imageSrc, action, target, group, status, time, comment }) => (
    <li className="mb-10  ms-6">
      <span className="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <img className="rounded-full w-6 h-6 shadow-lg" src={imageSrc} alt={`${name} image`} />
      </span>
      <div className="items-center justify-between p-4 w-[40svw] bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{time}</time>
        {comment ? (
          <div>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">{name} {action} <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">{target}</a></div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{comment}</div>
          </div>
        ) : (
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">{name} {action} <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">{target}</a> {group ? `to ${group} ` : ''}task status to <span className="font-semibold text-gray-900 dark:text-white">{status}</span></div>
        )}
      </div>
    </li>
  );

  export default Activity;