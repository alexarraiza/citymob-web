<?php
class MarkerType
{
	private $id_auto;
	private $description;
	private $active;
	
	public function getId() {
		return $this->id_auto;
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