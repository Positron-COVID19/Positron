pipeline { 
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Building...'
                dir('/opt/Positron') {
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
                echo 'PM2 watching enabled, no need to manually deploy...'
            }
        }
        stage('sanity check') {
            steps {
                sh 'curl --fail localhost:3000'
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
