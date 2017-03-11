<?php
class Disability_Type
{
	private $auto_id;
	private $description;
	private $active;
	
	public function getId() {
		return $this->auto_id;
	}
		
	public function getDescription() {
		return $this->description;
	}
	
	public function setDescription($description) {
		$this->description = $description;
	}

	public function getActive() {
		return $this->active;
	}
	
	public function setActive($active) {
		$this->active = $active;
	}
}