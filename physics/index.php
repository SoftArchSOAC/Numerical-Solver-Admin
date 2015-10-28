<!DOCTYPE html>
<html>
	<head>
		<title>Physic App</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<link type="text/css" rel="stylesheet" href="css/icon.css" />
		<link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/>
		<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	</head>
	<body>
		<table>
			<tbody>
				<tr>
					<td width="30%">
						<div align="center">
							<h5>Numerical</h5>
							</br>
							<a class='dropdown-button btn' href='#' data-activates='dropdown1'>Chapter</a>
							<ul id='dropdown1' class='dropdown-content'>
								<li><a href="#!">Chapter one</a></li>
								<li><a href="#!">Chapter two</a></li>
								<li><a href="#!">Chapter three</a></li>
							</ul>
							</br>
							</br>
							<a class='dropdown-button btn' href='#' data-activates='dropdown2'>Topic</a>
							<ul id='dropdown2' class='dropdown-content'>
								<li><a href="#!">Topic one</a></li>
								<li><a href="#!">Topic two</a></li>
								<li><a href="#!">Topic three</a></li>
							</ul>
						</div>
					</td>
					<td>
						<div align="center">
							<h5>Parameters</h5>
							</br>
							<table>
								<tbody>
									<tr>
										<td>
											<div class="input-field">
												<input id="param_name" type="text" class="validate"/>
												<label for="param_name">Name</label>
											</div>
											
										</td>
										<td>
											<div class="input-field">
												<input id="param_sym" type="text" class="validate"/>
												<label for="param_sym">Symbol</label>
											</div>								
										</td>
									</tr>
									<tr>
										<td>
											<div class="input-field">
												<input id="def_val" type="text" class="validate"/>
												<label for="def_val">Default Value:</label>
											</div>
										</td>
										<td>BOX</td>
										<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a></td>
									</tr>
									<tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<table>
										<tbody>
											<tr>
												<td>
													<div class="input-field">
														<input id="def_val" type="text" class="validate"/>
														<label for="def_val">Formula</label>
													</div>
												</td>
											</tr>
											<tr>
												
											</tr>
											<tr>
												<td><h5>Formula</h5></td>
												<td><a class="waves-effect waves-light btn">OK</a></td>
											</tr>
											
										</tbody>
									</table>
								</div>
							</td>
							<td>
								<div>
									<h5>Add Units</h5>
									<table>
										<tbody>
											<tr>
												<td>
													<div class="input-field">
														<input id="param_name" type="text" class="validate"/>
														<label for="param_name">Name</label>
													</div>
													
												</td>
												<td>
													<div class="input-field">
														<input id="param_sym" type="text" class="validate"/>
														<label for="param_sym">Symbol</label>
													</div>								
												</td>
											</tr>
											<tr>
												<td>
													<div class="input-field">
														<input id="def_val" type="text" class="validate"/>
														<label for="def_val">Default Value:</label>
													</div>
												</td>
											</tr>
											<tr>
												<td>BOX</td>
												<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a></td>
											</tr>
										<tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				
				<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js">
				</script>
				<script type="text/javascript" src="js/materialize.min.js">
				</script>
			</body>
		</html>											