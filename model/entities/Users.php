<?php
class User
{
	private $id_auto;
	private $name;
	private $user_identification;
	private $email;
	private $password;
	
	public function getId() {
		return $this->id_auto;
	}

	public function getName() {
		return $this->getName();
	}
	
	public function setName($name) {
		$this->name = $name;
	}
	
	public function getUserId() {
		return $this->user_identification;
	}
	
	public function setUserId($userId) {
		$this->user_identification = $userId;
	}
	
	public function getEmail() {
		return $this->email;
	}
	
	public function setEmail($email) {
		$this->email = $email;
	}
	
	public function getPassword() {
		return $this->password;
	}
	
	public function setPassword($password) {
		$this->password = $password;
	}
}