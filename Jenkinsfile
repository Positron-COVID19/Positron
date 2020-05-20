pipeline { 
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Building...'
                dir('/home/ubuntu/Positron') {
                    sh '''
                        git checkout master
                        git pull
                    '''
                    sh 'npm install'
                }
            }
        }
        stage('test') {
            steps {
                echo 'No tests written yet.'
            }
        }
        stage('deploy') {
            steps {
                echo 'Redeploying...'
                sh 'pm2 restart Positron'
            }
        }
    }
    post {
        success {
            echo 'Automated pipeline successful!'
        }
        unsuccessful {
            echo 'Automated pipeline was NOT successful!'
        }
    }
}
