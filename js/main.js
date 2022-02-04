window.addEventListener('load', () => {
	document.getElementById("btn-exit").addEventListener('click', (e) => {
		console.log("Hola");
		Swal.fire({
			title: 'Are you sure you want to leave the account?',
			text: "Tasks will be saved",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			background: '#374151',
				color: '#6b7280',
			confirmButtonText: 'Accept'
		  }).then((result) => {
			if (result.isConfirmed) {
				window.location.href = "./login.html";
			}
		  })
	});
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_tasks = document.querySelector("#tasks");
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;
		if(task === "")
		{
			Swal.fire ({
				title: 'Error!',
				text: "Empty fields",
				icon: 'error',
				background: '#374151',
				color: '#6b7280',
				confirmButtonText: 'Ok'
			})
		}
		else {
			const task_el = document.createElement('div');
			task_el.classList.add('task');

			const task_content = document.createElement('div');
			task_content.classList.add('content');

			task_el.appendChild(task_content);

			const task_input = document.createElement('input');
			task_input.classList.add('text');
			task_input.type = 'text';
			task_input.value = task;
			task_input.setAttribute('readonly', 'readonly');

			task_content.appendChild(task_input);

			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');
			
			// CREAR EL BOTON PARA EDITAR
			const task_edit_el = document.createElement('button');
			const image_task_edit = document.createElement('img');
			image_task_edit.src = "./resources/image-task-edit.png";
			image_task_edit.id = "image-task-edit";
			image_task_edit.alt = "Edit";
			task_edit_el.classList.add('edit');
			task_edit_el.appendChild(image_task_edit);

			// CREAR EL BOTON PARA ELIMINAR
			const task_delete_el = document.createElement('button');
			const image_task_delete = document.createElement('img');
			image_task_delete.src = "./resources/image-task-delete.png";
			image_task_delete.id = "image-task-delete";
			task_delete_el.classList.add('delete');
			task_delete_el.appendChild(image_task_delete);

			task_actions_el.appendChild(task_edit_el);
			task_actions_el.appendChild(task_delete_el);

			// SE GENERA TODA LA LISTA (ACCIONES = EDITAR Y ELIMINAR - INPUT DE LA TAREA) 
			task_el.appendChild(task_actions_el);
			list_tasks.appendChild(task_el);
			input.value = '';
		} 
	});
});